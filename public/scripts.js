window.localStorage.setItem('egg7', `
    CONGRATULATIONS! You found the 7th of 8 easter eggs in our scavenger hunt!

    LocalStorage is one of a number of places a developer might choose to store 
    some application data. These values are normally injected somewhere in the 
    user interface or used in the business logic for the application.

    An attacker might try to compromise these values.

    What about cookies? Developers also put lots of stuff in your cookies, and 
    because there isn't much space allowed in a cookie it's often encoded, 
    encrypted or hashed.

    Hint #1: Look at the cookies in DevTools, specifically one named "session".

    Hint #2: Do a Google search to "Base64 Decode" the value you find in the cookie.
`);

document.cookie = "session=Q09OR1JBVFVMQVRJT05TISBZb3UgZm91bmQgYWxsIDggZWFzdGVyIGVnZ3MgaW4gb3VyIHNjYXZlbmdlciBodW50IQoKVXN1YWxseSBzZXNzaW9ucyBhcmVu4oCZdCBCYXNlNjQgRW5jb2RlZCwgYnV0IGxvdHMgb2Ygb3RoZXIgZGF0YSBpcy4gSWYgaXQncyAKdGhpcyBlYXN5IHRvIGhpZGUgZGF0YSBpbiBwbGFpbiBzaWdodCwgZG8geW91IGhhdmUgYSBuZXcgcGVyc3BlY3RpdmUgb24gY29va2llIApsYXdzIGFuZCBkYXRhIHByaXZhY3k/CgpFbWFpbCBtZSAoYXJ0QGFrYXdlYmRlc2lnbi5jb20pIHdoYXQgeW91IGZpbmQgYXQgdGhlIFVSTCBiZWxvdyBhbmQgdGVsbCBtZSAKaG93IHlvdSBsaWtlZCB0aGlzIEN5YmVyIFNjYXZlbmdlciBIdW50IQoKICAqIGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9b0hnNVNKWVJIQTA=; SameSite=Strict";