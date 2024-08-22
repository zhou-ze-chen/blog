import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,d as e}from"./app-DdiZsM7o.js";const i={},l=e(`<h1 id="箭头函数和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#箭头函数和普通函数的区别"><span>箭头函数和普通函数的区别</span></a></h1><h3 id="_1-箭头函数比普通函数更加简洁" tabindex="-1"><a class="header-anchor" href="#_1-箭头函数比普通函数更加简洁"><span>1. 箭头函数比普通函数更加简洁</span></a></h3><p>如果没有参数，就直接写一个空括号即可</p><p>如果只有一个参数，可以省去参数的括号</p><p>如果有多个参数，用逗号分割</p><p>如果函数体的返回值只有一句，可以省略大括号</p><h3 id="_2-箭头函数没有自己的-this" tabindex="-1"><a class="header-anchor" href="#_2-箭头函数没有自己的-this"><span>2. 箭头函数没有自己的 this</span></a></h3><p>箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以箭头函数中 this 的指向在它在定义时已经确定了，之后不会改变。</p><h3 id="_3-箭头函数继承来的-this-指向永远不会改变" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数继承来的-this-指向永远不会改变"><span>3. 箭头函数继承来的 this 指向永远不会改变</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var id = &#39;GLOBAL&#39;;</span></span>
<span class="line"><span>var obj = {</span></span>
<span class="line"><span>  id: &#39;OBJ&#39;,</span></span>
<span class="line"><span>  a: function(){</span></span>
<span class="line"><span>    console.log(this.id);</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  b: () =&gt; {</span></span>
<span class="line"><span>    console.log(this.id);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>obj.a();    // &#39;OBJ&#39;</span></span>
<span class="line"><span>obj.b();    // &#39;GLOBAL&#39;</span></span>
<span class="line"><span>new obj.a()  // undefined</span></span>
<span class="line"><span>new obj.b()  // Uncaught TypeError: obj.b is not a constructor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象 obj 的方法 b 是使用箭头函数定义的，这个函数中的 this 就永远指向它定义时所处的全局执行环境中的 this，即便这个函数是作为对象 obj 的方法调用，this 依旧指向 Window 对象。需要注意，定义对象的大括号 <strong>{ }</strong> 是无法形成一个单独的执行环境的，它依旧是处于全局执行环境中。</p><h3 id="_4-call-、apply-、bind-等方法不能改变箭头函数中-this-的指向" tabindex="-1"><a class="header-anchor" href="#_4-call-、apply-、bind-等方法不能改变箭头函数中-this-的指向"><span>4. call()、apply()、bind() 等方法不能改变箭头函数中 this 的指向</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>var id = &#39;Global&#39;;</span></span>
<span class="line"><span>let fun1 = () =&gt; {</span></span>
<span class="line"><span>    console.log(this.id)</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>fun1();                     // &#39;Global&#39;</span></span>
<span class="line"><span>fun1.call({id: &#39;Obj&#39;});     // &#39;Global&#39;</span></span>
<span class="line"><span>fun1.apply({id: &#39;Obj&#39;});    // &#39;Global&#39;</span></span>
<span class="line"><span>fun1.bind({id: &#39;Obj&#39;})();   // &#39;Global&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-箭头函数不能作为构造函数使用" tabindex="-1"><a class="header-anchor" href="#_5-箭头函数不能作为构造函数使用"><span>5. 箭头函数不能作为构造函数使用</span></a></h3><p>由于箭头函数时没有自己的 this，且 this 指向外层的执行环境，且不能改变指向，所以不能当做构造函数使用。</p><h3 id="_6-箭头函数没有自己的-arguments" tabindex="-1"><a class="header-anchor" href="#_6-箭头函数没有自己的-arguments"><span>6. 箭头函数没有自己的 arguments</span></a></h3><p>箭头函数没有自己的 <a href="https://so.csdn.net/so/search?q=arguments%E5%AF%B9%E8%B1%A1&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">arguments 对象</a>。在箭头函数中访问 arguments 实际上获得的是它外层函数的 arguments 值。</p><h3 id="_7-箭头函数没有-prototype" tabindex="-1"><a class="header-anchor" href="#_7-箭头函数没有-prototype"><span>7. 箭头函数没有 prototype</span></a></h3><h3 id="_8-箭头函数的-this-指向哪里" tabindex="-1"><a class="header-anchor" href="#_8-箭头函数的-this-指向哪里"><span>8. 箭头函数的 this 指向哪⾥？</span></a></h3><p>箭头函数不同于传统 JavaScript 中的函数，箭头函数并没有属于⾃⼰的 this，它所谓的 this 是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的 this，所以是不会被 new 调⽤的，这个所谓的 this 也不会被改变。</p>`,20),t=[l];function p(r,d){return a(),n("div",null,t)}const o=s(i,[["render",p],["__file","箭头函数和普通函数的区别.html.vue"]]),b=JSON.parse(`{"path":"/study/Javascript/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E5%92%8C%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB.html","title":"箭头函数和普通函数的区别","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2022-01-11T00:00:00.000Z","category":["JavaScript"],"tag":["JavaScript","箭头函数"],"description":"箭头函数和普通函数的区别 1. 箭头函数比普通函数更加简洁 如果没有参数，就直接写一个空括号即可 如果只有一个参数，可以省去参数的括号 如果有多个参数，用逗号分割 如果函数体的返回值只有一句，可以省略大括号 2. 箭头函数没有自己的 this 箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以...","head":[["meta",{"property":"og:url","content":"http://www.sxkjxy.cc/study/Javascript/%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0%E5%92%8C%E6%99%AE%E9%80%9A%E5%87%BD%E6%95%B0%E7%9A%84%E5%8C%BA%E5%88%AB.html"}],["meta",{"property":"og:site_name","content":"Ron 个人博客"}],["meta",{"property":"og:title","content":"箭头函数和普通函数的区别"}],["meta",{"property":"og:description","content":"箭头函数和普通函数的区别 1. 箭头函数比普通函数更加简洁 如果没有参数，就直接写一个空括号即可 如果只有一个参数，可以省去参数的括号 如果有多个参数，用逗号分割 如果函数体的返回值只有一句，可以省略大括号 2. 箭头函数没有自己的 this 箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-22T10:57:01.000Z"}],["meta",{"property":"article:author","content":"Mr.Ron"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"箭头函数"}],["meta",{"property":"article:published_time","content":"2022-01-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-22T10:57:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"箭头函数和普通函数的区别\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-22T10:57:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Ron\\",\\"url\\":\\"https://github.com/wuwenlong12/ron-blog\\"}]}"]]},"headers":[{"level":3,"title":"1. 箭头函数比普通函数更加简洁","slug":"_1-箭头函数比普通函数更加简洁","link":"#_1-箭头函数比普通函数更加简洁","children":[]},{"level":3,"title":"2. 箭头函数没有自己的 this","slug":"_2-箭头函数没有自己的-this","link":"#_2-箭头函数没有自己的-this","children":[]},{"level":3,"title":"3. 箭头函数继承来的 this 指向永远不会改变","slug":"_3-箭头函数继承来的-this-指向永远不会改变","link":"#_3-箭头函数继承来的-this-指向永远不会改变","children":[]},{"level":3,"title":"4. call()、apply()、bind() 等方法不能改变箭头函数中 this 的指向","slug":"_4-call-、apply-、bind-等方法不能改变箭头函数中-this-的指向","link":"#_4-call-、apply-、bind-等方法不能改变箭头函数中-this-的指向","children":[]},{"level":3,"title":"5. 箭头函数不能作为构造函数使用","slug":"_5-箭头函数不能作为构造函数使用","link":"#_5-箭头函数不能作为构造函数使用","children":[]},{"level":3,"title":"6. 箭头函数没有自己的 arguments","slug":"_6-箭头函数没有自己的-arguments","link":"#_6-箭头函数没有自己的-arguments","children":[]},{"level":3,"title":"7. 箭头函数没有 prototype","slug":"_7-箭头函数没有-prototype","link":"#_7-箭头函数没有-prototype","children":[]},{"level":3,"title":"8. 箭头函数的 this 指向哪⾥？","slug":"_8-箭头函数的-this-指向哪里","link":"#_8-箭头函数的-this-指向哪里","children":[]}],"git":{"createdTime":1724324221000,"updatedTime":1724324221000,"contributors":[{"name":"zhou","email":"2785444823@qq.com","commits":1}]},"readingTime":{"minutes":2.01,"words":603},"filePathRelative":"study/Javascript/箭头函数和普通函数的区别.md","localizedDate":"2022年1月11日","excerpt":"\\n<h3>1. 箭头函数比普通函数更加简洁</h3>\\n<p>如果没有参数，就直接写一个空括号即可</p>\\n<p>如果只有一个参数，可以省去参数的括号</p>\\n<p>如果有多个参数，用逗号分割</p>\\n<p>如果函数体的返回值只有一句，可以省略大括号</p>\\n<h3>2. 箭头函数没有自己的 this</h3>\\n<p>箭头函数不会创建自己的 this， 所以它没有自己的 this，它只会在自己作用域的上一层继承 this。所以箭头函数中 this 的指向在它在定义时已经确定了，之后不会改变。</p>\\n<h3>3. 箭头函数继承来的 this 指向永远不会改变</h3>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>var id = 'GLOBAL';</span></span>\\n<span class=\\"line\\"><span>var obj = {</span></span>\\n<span class=\\"line\\"><span>  id: 'OBJ',</span></span>\\n<span class=\\"line\\"><span>  a: function(){</span></span>\\n<span class=\\"line\\"><span>    console.log(this.id);</span></span>\\n<span class=\\"line\\"><span>  },</span></span>\\n<span class=\\"line\\"><span>  b: () =&gt; {</span></span>\\n<span class=\\"line\\"><span>    console.log(this.id);</span></span>\\n<span class=\\"line\\"><span>  }</span></span>\\n<span class=\\"line\\"><span>};</span></span>\\n<span class=\\"line\\"><span>obj.a();    // 'OBJ'</span></span>\\n<span class=\\"line\\"><span>obj.b();    // 'GLOBAL'</span></span>\\n<span class=\\"line\\"><span>new obj.a()  // undefined</span></span>\\n<span class=\\"line\\"><span>new obj.b()  // Uncaught TypeError: obj.b is not a constructor</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,b as data};
