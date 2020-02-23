import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Nicolas Emkis",
          avatar:
            "http://emkis.profissional.ws/comment-feed/assets/avatars/nicolas-profile.jpg"
        },
        date: "26 Out 2019",
        content: "Galeras, essa frase é algo muito importante e super massa",
        comments: [
          {
            id: 1,
            author: {
              name: "Mirele Mazza",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/mirele-profile.jpg"
            },
            date: "26 Out 2019",
            content: "ai que expressivo, amei"
          },
          {
            id: 2,
            author: {
              name: "Andre Martini",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/andre-profile.jpg"
            },
            date: "27 Out 2019",
            content: "pô, ai sim meu cupinxa"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Xuliene",
          avatar:
            "http://emkis.profissional.ws/comment-feed/assets/avatars/xuliene-profile.jpg"
        },
        date: "31 Out 2019",
        content:
          "Ame seu doguinho, cuide das suas prantas, se hidrate e faça exercícios",
        comments: [
          {
            id: 1,
            author: {
              name: "Nicolas Emkis",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/nicolas-profile.jpg"
            },
            date: "01 Nov 2019",
            content: "um exêmplo de pessoa, uma deusa, eu diria"
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Mirele Mazza",
          avatar:
            "http://emkis.profissional.ws/comment-feed/assets/avatars/mirele-profile.jpg"
        },
        date: "22 Fev 2020",
        content: `"Não se pode duvidar de que todos os nossos conhecimentos 
          começam com a experiência, porque, com efeito, como haveria de 
          exercitar-se a faculdade de se conhecer, se não fosse pelos objetos 
          que, excitando os nossos sentidos, de uma parte, produzem por si 
          mesmos representações, e de outra parte, impulsionam a nossa 
          inteligência a compará-los entre si, a reuni-los ou separá-los, e 
          deste modo à elaboração da matéria informe das impressões sensíveis 
          para esse conhecimento das coisas que se denomina experiência?"`,
        comments: [
          {
            id: 1,
            author: {
              name: "Nicolas Emkis",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/nicolas-profile.jpg"
            },
            date: "22 Fev 2020",
            content: "depois desse texto nossa, tudo faz sentido"
          },
          {
            id: 2,
            author: {
              name: "Mirele Mazza",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/mirele-profile.jpg"
            },
            date: "22 Fev 2020",
            content: "não falei nada mas falei tudo, amém Kant"
          },
          {
            id: 3,
            author: {
              name: "Andre Martini",
              avatar:
                "http://emkis.profissional.ws/comment-feed/assets/avatars/andre-profile.jpg"
            },
            date: "23 Fev 2020",
            content: "vou te dizer que ai tu foi longe"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="container">
        <ol className="post__list">
          {this.state.posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ol>
      </div>
    );
  }
}

export default PostList;
