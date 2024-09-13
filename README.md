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

Inspired by [Go](https://go.dev/) error handling pattern

```go
func main() {
    content, err := readFile("example.txt")
    if err != nil {
        if os.IsNotExist(err) {
            fmt.Printf("File %s does not exist.\n", filename)
        } else {
            fmt.Printf("Failed to read file %s: %v\n", filename, err)
        }
        return
    }

    fmt.Printf("File content:\n%s\n", content)
}
```

Inspired by [ECMAScript Safe Assignment Operator Proposal](https://github.com/arthurfiorette/proposal-safe-assignment-operator)
