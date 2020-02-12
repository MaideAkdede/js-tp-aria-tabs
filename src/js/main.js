/*
* Énoncé :
* Ajoutez la classe .js-enabled à l’élément html afin de provoquer un rendu sous forme de tab.
* Au click sur un bouton de la navigation vous devez ajouter la classe active à l’article qui porte l’id définit dans l’attribut data-country du bouton cliqué. Ex : Quand je clique sur le bouton
* l’article dont l’id est London reçoit la classe active.
* Ajouter au bouton cliqué également la classe active.
* */
(function () {
    const TabOpen = {
        start (){
            document.documentElement.classList.add('js-enabled');
            this.activeContents = document.querySelectorAll('.tabcontent');
            this.links = document.querySelectorAll('.tablinks');
            for(const link of this.links){
                link.addEventListener('click', (e)=>{
                    this.addActive(e);
                    console.log(this);
                })
            }
        },
        addActive(e){
            for(const activeContent of this.activeContents){
                activeContent.classList.remove('active');
            }
            for(const activeClick of this.links){
                activeClick.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
            document.querySelector(`#${e.currentTarget.dataset.country}`).classList.add('active');
        }
    };
    TabOpen.start();
})();
