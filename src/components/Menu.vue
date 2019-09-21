<template>
  <nav class='nav'>
      <div class="nav-lf lr">
 <router-link to="/left" class="active">正在热映</router-link>
      </div>
       <div class="nav-rg lr">
 <router-link  to='/right'>正在热映</router-link>
      </div>
     
  </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.nav{
    height: 49px;
    display: flex;
    background: #fff;
    .lr{
       flex: 1;
        text-align: center;
        position: relative;
       a{    
           height: 49px;
           line-height: 49px; 
            color: #333;
           
            &.active{
                color: red;
            }
             &.active:after{
           position:absolute;
           bottom: 0;
           left:50%;
           transform: translateX(-50%);
           content: "";
           min-width:64px;
           height: 2px;
           background: red;
       }
        
       }
      
    }

}
</style>