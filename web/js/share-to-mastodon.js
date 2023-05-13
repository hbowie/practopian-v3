function shareToMastodon(postTitle, postLink) {
		const server = prompt('Mastodon Instance / Server Name?');

		if (server) {
				// test if server looks like a domain
				if (!server.match(/^[^\s]+\.[^\s]+$/)) {
						alert('Invalid server name');
						return;
				}

				const text = `"${postTitle}" by @hbowie@c.im\n\n${postLink}`;
				const uri  = `${encodeURIComponent(text)}`
				window.open(`https://${server}/share?text=${uri}`);
		}
};