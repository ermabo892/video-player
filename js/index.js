// para hacer acciones con las etiquetas o ids
        // usar signo $ para guardar variables de html como buena practica
        const $video = document.querySelector('#video');
        const $play = document.querySelector('#play');
        const $pause = document.querySelector("#pause");
        const $backward = document.querySelector("#backward");
        const $forward = document.querySelector("#forward");
        
        //metodo para anadir eventos del navegador
        // primer parametro es el nombre del evento
        // segundo parametro es la funcion 
        $play.addEventListener("click", handlePlay);
        $pause.addEventListener("click", handlePause);
        $backward.addEventListener("click", handleBackward);
        $forward.addEventListener("click", handleForward);
        const $progress = document.querySelector("#progress")
        $video.addEventListener("loadedmetadata", handleProgress)
        $video.addEventListener("timeupdate", handleTimeUpdate)


        function handlePlay(){
            $video.play()
            $play.hidden = true;
            $pause.hidden = false
            // hidden oculta o no el boton
            // se agrega hidden inicialmente en el la etiqueta pause para que no aparezca inicialmente
        }

        function handlePause(){
            $video.pause();
            $pause.hidden = true;
            $play.hidden = false;
        }

        function handleBackward(){
            $video.currentTime -= 10 
        }

        function handleForward(){
            $video.currentTime += 10 
        }

        function handleProgress(){
             $progress.max = $video.duration
        }

        function handleTimeUpdate(){
            $progress.value = $video.currentTime
        }

        $progress.addEventListener("input", handleInput)

        function handleInput(){
            console.log($progress.value)
            $video.currentTime = $progress.value
        }