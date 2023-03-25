function hey(message) {
	// Code here
    input = message.trim();
    if (message.length === 0) {
        return 'Fine. Be that way!';
    }
    if (message.endsWith('?')) {
        if (message === message.toUpperCase()) {
            return 'Calm down, I know what I\'m doing!';
        }   
        else {
            return 'Sure.';
        }
    }
    if (message === message.toUpperCase()) {
        return 'Whoa, chill out!';
    }
    return 'Whatever.';
}
