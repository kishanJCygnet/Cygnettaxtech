const n={computed:{yourLicenseIsText(){let e="You have not yet added a license key.";return this.$aioseo.license.isExpired&&(e="Your license has expired."),this.$aioseo.license.isDisabled&&(e="Your license has been disabled."),this.$aioseo.license.isInvalid&&(e="Your license key is invalid."),e}}};export{n as L};
