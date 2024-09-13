# `safe-try`

`safe-try` is a lightweight utility library for JavaScript that simplifies error handling by providing easy-to-use wrappers for both synchronous and asynchronous operations, returning a tuple of the result and error.

## Usage

```ts
import { safeAsync, safeSync } from '@lachero/safe-try';

// async example
const [result, err] = await safeAsync(mightFailAsync());
if (!err) {
	// handle error
	return;
}

result;
// ^? 'success'

// sync example
const [result, err] = safeSync(() => mightFailSync());
if (!err) {
	// handle error
	return;
}

result;
// ^? 'success'

async function mightFailAsync() {
	if (Math.random() > 0.5) throw new Error('Failed');

	return 'success';
}

function mightFailSync() {
	if (Math.random() > 0.5) throw new Error('Failed');

	return 'success';
}
```

Inspired by [Go Error Handling](https://go.dev/blog/error-handling-and-go)

```go
f, err := os.Open("filename.ext")
if err != nil {
    log.Fatal(err)
}
// do something with the open *File f
```

Inspired by [ECMAScript Safe Assignment Operator Proposal](https://github.com/arthurfiorette/proposal-safe-assignment-operator)
