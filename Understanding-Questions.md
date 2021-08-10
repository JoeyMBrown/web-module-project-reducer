# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* applyNumber action is fired with an argument of 1.
* applyNumber action helper returns the string of APPLY_NUMBER, and a payload of 1
* dispatch then fires, with the new type:APPLY_NUMBER, and a payload of 1, and state
* Apply Number reducer called.
* Apply number reducer returns a copy of state, with the total property being set by calling calculate result.
* We pass the total, the payload, and the current operation to calculate result.
* Calculate result decides what operation to do based on the operation passed in
* it then does the operation with the total from state, and the number from payload (number pressed)
* After the operation this gets reuturned to dispatch as a copy of state with the total being the result of calculate result.
* Dispatch updates our state with the returned value, and a re-render occurs
...

* TotalDisplay shows the total plus 1.
