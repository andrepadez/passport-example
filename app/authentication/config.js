module.exports = {
    facebookAuth: {
        clientID: '586093981487856', // your App ID
        clientSecret: '573e8d194202840642701aa214f66071', // your App Secret
        callbackURL: 'http://192.168.1.12:8080/auth/facebook/callback'
    },

    twitterAuth: {
        consumerKey: 'your-consumer-key-here',
        consumerSecret: 'your-client-secret-here',
        callbackURL: 'http://localhost:8080/auth/twitter/callback'
    },

    googleAuth: {
        clientID      : 'your-secret-clientID-here',
        clientSecret  : 'your-client-secret-here',
        callbackURL   : 'http://localhost:8080/auth/google/callback'
    }
}
