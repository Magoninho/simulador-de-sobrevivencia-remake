/*
                                                  _  _
                                                 (\\( \
                                                  `.\-.)
                              _...._            _,-'   `-.
\                           ,'      `-._.---.,-'       .  \
 \`.                      ,'                               `.
  \ `-...__              /                           .   .:  y
   `._     ``--..__     /                           ,'`---._/
      `-._         ``--'                      |    /_
          `.._                   _            ;   <_ \
              `--.___             `.           `-._ \ \
                     `--<           `.     (\ _/)/ `.\/
                         \            \     `
                         Bem vindo à classe do Canguru

*/
class Canguru extends Mob {
    constructor(x, y, width, height, image) {
        super(x, y, width, height);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = new GraphicsLoader().loadGraphics('../images/canguru.png');
        this.dialog = new Dialog(["Você achou um canguru fodão :O<br><span style='color: red'>Vida: 420</span><br><span style='color: blue'>Dano: 69</span>"]);
        this.dialog.onConfirm = () => {
            this.defeated = true; // TODO: REMOVE THIS LATER
            // TODO: FAZER UMA FUNÇÃO/CLASSE QUE PASSE O CANGURU COMO ARGUMENTO E FAZER ELE MORRER SE O PLAYER GANHAR
        };
    }
    onCollisionEnter() {
        this.dialog.show("dialogs", YES_NO);
    }
}
//# sourceMappingURL=Canguru.js.map