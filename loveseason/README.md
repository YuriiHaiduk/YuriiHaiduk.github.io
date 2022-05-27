Информация для пользования
---

###npm run dev - собрать проект в режиме разаботки
###npm run build - собрать проект в режиме продакшн
###npm run start - запустить проект в режиме разаботки для работы 

Структура файлов
---


/src  ---   Корневая папка самого проекта.             
/src/assets/fonts  ---  Шрифты               
/src/assets/img   ---  Изображения           
/src/js/   --- Cодержит главный файл index.js в который подключаются скрипты и стили JavaScript файлы. (script.js, jquery.js...)  
/src/scss/components  ---  стили компонентов страниц/страниц    
/src/scss/core/ --- Файлы для основной настройки,применяемые для всего сайта                   
/src/scss/core/fonts.scss  ---  Подключение шрифтов     
/src/scss/core/vars.scss  ---  Переменные  
/src/scss/core/normalize.scss  ---  Сброс стилей.    
/src/scss/style.scss   ---  Файл который подключает все стили.     
       
/node_modules   --- Файлы npm                         

#####webpack.config.js --- Настройка webpack     
.bowerrc --- Файлы Gulp              
.gitignore --- Файлы Git (исключение)                           
package.json ---  Файлы webpack               
package-lock.json --- Файлы webpack              
README.md --- вы находитесь здесь               

---

- После установления гита,в консоли задаем свое имя и  e-mail, с помощью команды:                               
git config --global user.name "FIRST_NAME LAST_NAME"                                  
git config --global user.email "MY_NAME@example.com"

