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

document.cookie = "session=Q09OR1JBVFVMQVRJT05TISBZb3UgZm91bmQgYWxsIDggZWFzdGVyIGVnZ3MgaW4gdGhpcyBzY2F2ZW5nZXIgaHVudCEKClVzdWFsbHkgc2Vzc2lvbnMgYXJlbuKAmXQgQmFzZTY0IEVuY29kZWQsIGJ1dCBsb3RzIG9mIG90aGVyIGRhdGEgaXMuIElmIGl0J3MgCnRoaXMgZWFzeSB0byBoaWRlIGRhdGEgaW4gcGxhaW4gc2lnaHQsIGRvIHlvdSBoYXZlIGEgbmV3IHBlcnNwZWN0aXZlIG9uIGNvb2tpZSAKbGF3cyBhbmQgZGF0YSBwcml2YWN5PwoKV2FudCB0byBsZWFybiBtb3JlIGFib3V0IHdlYiBhcHBsaWNhdGlvbiBzZWN1cml0eT8/PwoKQ2hlY2sgb3V0IG15IG9ubGluZSBjb3Vyc2UhCgogICogaHR0cHM6Ly9zZWN1cmV3ZWJzb2x1dGlvbnMudGVhY2hhYmxlLmNvbS9wL2ludHJvLXRvLWhhY2tpbmctd2ViLWFwcGxpY2F0aW9ucwoKV2FudCBzb21lIGZyZWUgc3dhZz8/PwoKRW1haWwgbWUgKGFydEBzZWN1cmV3ZWJzb2x1dGlvbnMuaW8pIHdoYXQgeW91IGZpbmQgYXQgdGhlIFVSTCBiZWxvdyBhbmQgdGVsbCBtZSAKaG93IHlvdSBsaWtlZCB0aGlzIEN5YmVyIFNjYXZlbmdlciBIdW50IQoKICAqIGh0dHBzOi8vYml0Lmx5L2N5YmVyc2NhdmVuZ2VyaHVudA==; SameSite=Strict";
