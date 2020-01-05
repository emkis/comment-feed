import React, { Component } from "react";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Nicolas Emkis",
          avatar: "https://avatars2.githubusercontent.com/u/35054425?s=460&v=4"
        },
        date: "26 Out 2019",
        content:
          "Galeras, esse texto é sobre algo muito importante e super massa",
        comments: [
          {
            id: 1,
            author: {
              name: "Mirele Mazza",
              avatar:
                "https://instagram.fpoa8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.150.1199.1199a/s640x640/74713599_156719315601391_8067224052173219253_n.jpg?_nc_ht=instagram.fpoa8-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Clw2a-b_klQAX9QMyos&oh=642ea7e728f15c64913814371ccbb000&oe=5EACF205"
            },
            date: "26 Out 2019",
            content: "ai que expressivo, amei"
          },
          {
            id: 2,
            author: {
              name: "Andre Martini",
              avatar:
                "https://instagram.fpoa8-1.fna.fbcdn.net/v/t51.2885-15/e35/c140.0.360.360a/79142340_2526373367644131_8246825468476227732_n.jpg?_nc_ht=instagram.fpoa8-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=eK_CY5C130kAX_kPT2T&oh=a59b8e9c272ebb27a558d0438aff66e3&oe=5E959508"
            },
            date: "27 Out 2019",
            content: "pô ai sim meu cupinxa"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Xuliene",
          avatar:
            "https://instagram.fpoa8-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/78932941_488963668433514_6333167899355726876_n.jpg?_nc_ht=instagram.fpoa8-2.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Meqw2L5Vg5cAX-aJPn1&oh=eff73dd45c5a90aae13be0a718b77dc2&oe=5EA1B3E0"
        },
        date: "31 Out 2019",
        content:
          "no pain no gain, estudar e tal, incenso é cheiroso, ame as pranta, o enem é FODA",
        comments: [
          {
            id: 1,
            author: {
              name: "Nicolas Emkis",
              avatar:
                "https://avatars2.githubusercontent.com/u/35054425?s=460&v=4"
            },
            date: "01 Nov 2019",
            content: "ô pranta, cê sabe cantar raça negra?"
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
