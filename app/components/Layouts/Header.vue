<script setup>

</script>

<template>
    <div>
        <header class="header">
            <div class="header-content">
                <h1 class="logo">
                    <NuxtLink to="/">MyBlog</NuxtLink>
                </h1>
                <nav class="nav">
                    <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                    <NuxtLink to="/create" class="nav-link">Create Post</NuxtLink>
                    <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                </nav>
            </div>
        </header>

    </div>
</template>


<style scoped>
.header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

.nav {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #3498db;
}

.nav-link.router-link-active {
    color: #3498db;
    font-weight: bold;
}
</style>
