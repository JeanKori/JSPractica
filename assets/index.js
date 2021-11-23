function MediaPlayer(Config) {
    this.media = Config.el;
  };

  MediaPlayer.prototype.play =  function (){
    this.media.play();
    AddOrRemoveClass('far', 'fa-play-circle', 0);
    AddOrRemoveClass('fas','fa-pause', 1);
  };

  MediaPlayer.prototype.pause =  function (){
    this.media.pause();
    AddOrRemoveClass('far', 'fa-play-circle', 1);
    AddOrRemoveClass('fas','fa-pause', 0);
  };

  MediaPlayer.prototype.TogglePlay =  function (){
    if (this.media.paused){
        this.play();
        button.title='pause';
    } else{
      this.pause();
      button.title='play';
    }
  };

  function AddOrRemoveClass(Class1, Class2, Option) {
    if(Option == 1){
      iconbutton.classList.add([Class1],[Class2]);
    }
    else {
      iconbutton.classList.remove([Class1],[Class2]);
    }
  };

  const video= document.querySelector('video');
  const player = new MediaPlayer({el : video});

  const button = document.querySelector('button');
  const iconbutton = document.querySelector('.far');
  button.onclick = () => player.TogglePlay();

