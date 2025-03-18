const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: "https://passport.amazon.jobs",
        viewportWidth: 1400,
        viewportHeight: 1200,
        env: {
            // ✅ Mailosaur Credentials (Backup)
            mailosaurServerId: "yd7jdoaa",  
            mailosaurApiKey: "JpPjkyeaMWolMxQnSbnjfIxbWPcqfWPn",

            // ✅ MailSlurp Credentials (Preferred)
            mailslurpApiKey: "d6ac22a2aa48518a83a8ec0ecd97ff19c65dc08a5e74a6e321c53849f1df52ec"
        }        
    }
});
