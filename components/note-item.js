class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ["title", "body", "created-at"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const body = this.getAttribute("body");
    const createdAt = this.getAttribute("created-at");

    this.innerHTML = `
        <div class="note-item">
          <h3>${title}</h3>
          <p>${body}</p>
          <small>${new Date(createdAt).toLocaleDateString()}</small>
        </div>
      `;
  }
}

customElements.define("note-item", NoteItem);
