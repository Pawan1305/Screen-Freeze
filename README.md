# Screen-Freeze

⚠️ DISCLAIMER:
This project is created strictly for educational and ethical testing purposes only. Unauthorized use of this application to disrupt, prank, or annoy others without their consent is illegal and unethical.
The author is not responsible for any misuse or consequences arising from the use of this code.
Use responsibly and in controlled environments only.

🧩 What Is This?
This is a screen-freeze simulation app built using Electron.
When executed, it creates a full-screen, frameless window that simulates a "frozen" screen — useful for educational demos, security awareness, or consensual pranks.

⚙️ How It Works
Launches a full-screen, frameless Electron window

Locks user interaction to simulate a frozen or unresponsive desktop

Can be exited using a specific key combination (see below)

🚀 Getting Started
⚠️ Use only on systems you own or have permission to test on.

1. Install Dependencies
Ensure Node.js is installed, then run:

2. npm install electron

3. Start the App
npm start

To safely exit the frozen screen:
# Press Ctrl + Alt + Q
Make sure this key combination is implemented in your Electron code (using globalShortcut.register).

🧪 Use Cases (Educational Only)
Demonstrate the concept of a screen-locker or unresponsive UI

Educate users about potential threats or prank tools

Build training around how to handle unresponsive systems

🚫 Warning
Do NOT use this on someone else’s system without clear permission.

Do NOT disguise this app as something else or use it maliciously.

Always include a working exit mechanism.

🛡️ Tips for Responsible Use
Test in a virtual machine or disposable environment

Let your users know how to exit before running the app

Never deploy on public or shared computers

📄 License
This project is licensed under the MIT License.
Use only for ethical and educational purposes.
