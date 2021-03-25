<script>
    export let segment;
</script>

<nav>

    <ul class="list-group">
        <li class="list-group-item active" aria-current="true">An active item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
    </ul>

    <!--	<ul>-->
    <!--		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>-->
    <!--		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>-->

    <!--		&lt;!&ndash; for the blog link, we're using rel=prefetch so that Sapper prefetches-->
    <!--		     the blog data when we hover over the link or tap it on a touchscreen &ndash;&gt;-->
    <!--		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>-->
    <!--		<li><a rel=prefetch aria-current="{segment === 'login' ? 'page' : undefined}" href="login">login</a></li>-->
    <!--	</ul>-->
</nav>
