FROM node:10

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub |  apt-key add -

RUN echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' |  tee /etc/apt/sources.list.d/google-chrome.list

RUN apt-get update

RUN apt-get install -y zsh google-chrome-stable git

RUN yarn global add eslint @angular/cli

RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

CMD ["zsh"]
