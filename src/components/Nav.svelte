<script>
    export let segment;
</script>

<nav>
    <ul class="list-group">
        <a aria-current="{segment === undefined ? 'page' : undefined}" href=".">
            <li class="list-group-item">home</li>
        </a>
        <a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
            <li class="list-group-item">about</li>
        </a>

        <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
             the blog data when we hover over the link or tap it on a touchscreen -->
        <a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}"
           href="blog">
            <li class="list-group-item">blog</li>
        </a>
        <a rel=prefetch aria-current="{segment === 'login' ? 'page' : undefined}"
           href="login">
            <li class="list-group-item">login</li>
        </a>
    </ul>
</nav>
