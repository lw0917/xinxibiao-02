var gulp=require('gulp');
var server=require('gulp-webserver');
   
    gulp.task('server',function(){
        return gulp.src('src')
               .pipe(server({
                   port:9090,
                   proxies:[
                       {
                           source:'/api/userlist',target:'http://192.168.2.51:3000/users/api/userlist'
                       }
                   ]
               }))
    })