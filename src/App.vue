<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">

.html, body {
    margin: 0;
    padding: 0;
}
#app {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
#nav {
    padding: 16px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
a, .router-link {
    color: darkblue;
    text-decoration: none;
}
.error {
    font-size: 2em;
    text-align: center;
}
.app-button {
    display: inline-block;
    font-size: 18px;
    cursor: pointer;
    background-color: white;
    padding: 8px;
    margin: 16px;
    border-radius: 4px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);

    &:hover {
        filter: brightness(150%);
    }
}
.loader {
    display: inline-block;
    margin: 32px;
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>
