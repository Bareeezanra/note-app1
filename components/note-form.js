class NoteForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <form id="note-form">
          <input type="text" id="note-title" placeholder="Note title" required>
          <textarea id="note-body" placeholder="Note body" required></textarea>
          <button type="submit">Add Note</button>
        </form>
      `;

    this.querySelector("form").addEventListener("submit", (event) => {
      event.preventDefault();
      const title = this.querySelector("#note-title").value;
      const body = this.querySelector("#note-body").value;
      this.dispatchEvent(
        new CustomEvent("note-added", {
          detail: { title, body },
          bubbles: true,
        })
      );
      this.querySelector("form").reset();
    });
  }
}

customElements.define("note-form", NoteForm);
