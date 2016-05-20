
const win = typeof window !== 'undefined' ? window : null;

const jassl = (src, async) => {

	if (!win || !win.document || !win.document.body)
	{
		throw new Error('window object is not available your environment.');
	}

	if (!win.Promise || !win.Promise.all)
	{
		throw new Error('Promises are not available your environment.');
	}

	if (!src)
	{
		throw new Error('src should not be empty.');
	}

	return new win.Promise((resolve, reject) => {

		const element = win.document.createElement('script');

		element.onload = () => {
			resolve(src);
		};

		element.onerror = () => {
			reject(new Error(src));
		};

		element.async = true === async;
		element.src = src;

		win.document.body.appendChild(element);
	});
};

module.exports = jassl;
