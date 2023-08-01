<div class="markdown prose w-full break-words dark:prose-invert light"><h1>Counter with setInterval</h1><p>This is a JavaScript code snippet that declares a variable called "counter" and sets it to 0. It also defines a function called "addOne" that increments the "counter" variable by 1 every time it is called. The code schedules the execution of the "addOne" function every 3 seconds using <code>setInterval</code>.</p><h2>Code Explanation</h2><h3>Variable Declaration</h3><ul><li>The <code>counter</code> variable is declared and initialized to 0. It will be used to keep track of the current count.</li></ul><h3>Function</h3><h4><code>addOne()</code></h4><ul><li>The <code>addOne</code> function is defined, and it increments the <code>counter</code> variable by 1 each time it is called.</li></ul><h3>Execution with setInterval</h3><ul><li>The <code>setInterval</code> function is used to schedule the execution of the <code>addOne</code> function at regular intervals of 3 seconds (3000 milliseconds).</li></ul><h2>Usage</h2><p>To use this counter with setInterval:</p><ol><li><p>Copy the provided JavaScript code into your JavaScript environment (e.g., browser console, Node.js, etc.).</p></li><li><p>Execute the code, and you will see the <code>addOne</code> function being called and the <code>counter</code> being incremented every 3 seconds.</p></li></ol><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-comment">// Declare a variable called "counter" and set it to 0</span>
<span class="hljs-keyword">var</span> counter = <span class="hljs-number">0</span>;

<span class="hljs-comment">// Write a function that increments the variable "counter" by 1 every time it is called</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">addOne</span>(<span class="hljs-params"></span>) {
  counter++;
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(counter);
}

<span class="hljs-comment">// Schedule the execution of the function every 3 seconds</span>
<span class="hljs-built_in">setInterval</span>(addOne, <span class="hljs-number">3000</span>);
</code></div></div></pre><h2>Output</h2><p>The code will log the incremented value of the <code>counter</code> variable to the console every 3 seconds.</p><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>python</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-python-repl">1
2
3
<span class="hljs-meta prompt_">...</span>
</code></div></div></pre><h2>Stopping the setInterval</h2><p>To stop the interval, you can use <code>clearInterval</code> and pass the ID returned by <code>setInterval</code> to it. For example:</p><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-comment">// Declare a variable called "counter" and set it to 0</span>
<span class="hljs-keyword">var</span> counter = <span class="hljs-number">0</span>;

<span class="hljs-comment">// Write a function that increments the variable "counter" by 1 every time it is called</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">addOne</span>(<span class="hljs-params"></span>) {
  counter++;
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(counter);
}

<span class="hljs-comment">// Schedule the execution of the function every 3 seconds</span>
<span class="hljs-keyword">var</span> intervalId = <span class="hljs-built_in">setInterval</span>(addOne, <span class="hljs-number">3000</span>);

<span class="hljs-comment">// Stop the interval after 10 seconds</span>
<span class="hljs-built_in">setTimeout</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
  <span class="hljs-built_in">clearInterval</span>(intervalId);
}, <span class="hljs-number">10000</span>);
</code></div></div></pre><p>In this example, the <code>clearInterval</code> function is used to stop the interval after 10 seconds (10000 milliseconds).</p></div>
