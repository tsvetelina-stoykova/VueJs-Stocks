<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="navbar-brand">
             <router-link to="/">Stocks</router-link>
        </div>
       
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" active-class="active"><a>Portfolio</a></router-link>
                <router-link to="/stocks" active-class="active"><a>Stocks</a></router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#">End Day</a></li>
                <li class="dropdown">
                    <a
                        hrev="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"> Save and Load <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Save Data</a></li>    
                        <li><a href="#">Load Data</a></li>   
                    </ul> 
                </li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
body{
    padding: 30px;
}
</style>