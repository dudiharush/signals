# signals
a reactive system - an observer (aka: reaction or **effect**) is subscribing to an observable (aka: subject or **signal**)
![createSignalAndCreateEffect](https://github.com/dudiharush/signals/assets/13401823/95871a27-d295-44ca-8302-201a8b16125e)

**code flow example**
- on code loaded
effect1:execute() ---> signal1:read() -- register to effect + execute effect
- on user event
signal1:write() --> effect1:execute()

# Derivation - createMemo
![createMemo](https://github.com/dudiharush/signals/assets/13401823/4a8f6641-e2a3-427a-9616-d5d7d27e28b2)

Effect triggering chain (multiple signals and effects.
The result updating signal2's state with signal1's read() value)

**code flow example**
- on code loaded
effect1:execute() of signal2:write( single1:read() )
effect2:ececute() of signal2:read()
- on user event
signal1:write() --> triggers --> effect1:execute() --> triggers --> signal2:write() --> triggers --> effect2:execute()

