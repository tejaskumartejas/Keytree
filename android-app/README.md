# Sachren Hospital Android app

This is a separate Expo / React Native Android app scaffold. It does not replace the existing website.

## Screens
- Home
- Find a doctor
- Treatments and services
- Contact and appointment enquiries

## Run locally
Install Node.js (LTS), then from this directory run:

```bash
npm install
npx expo start
```

Scan the QR code using Expo Go on an Android phone, or press `a` when an Android emulator is configured.

## Build an installable Android package
For a shareable APK or Play Store build, configure Expo Application Services (EAS), sign in, and run:

```bash
npx eas-cli build:configure
npx eas-cli build --platform android --profile preview
```

Build services may have usage limits or charges. Check current Expo/EAS pricing before building.

## Before public release
- Verify hospital phone numbers, email, address, doctors, qualifications, service details and opening hours with authorised hospital staff.
- Replace the placeholder service information with approved content.
- Add the official logo and licensed hospital photos.
- Add a real appointment workflow only after hospital staff agree how requests are received and handled.
- Add a privacy notice and data protection safeguards before collecting patient information.
- Test on physical Android devices, including small screens and accessibility settings.

This app does not provide medical diagnosis, emergency triage or confirmed bookings.
