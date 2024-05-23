export class CardNote {
  constructor(id, title, description, importance) {
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.id = id;
  }

  typeNoteClass() {
    if (this.importance === 'medium') {
      return 'card-note--medium';
    } else if (this.importance === 'high') {
      return 'card-note--high';
    }
    return '';
  }

  render() {
    return `
      <a href="/detail.php?id=${
        this.id
      }" class="card-note border-card-important ${this.typeNoteClass()}">
        <h3>
          ${this.title}
        </h3>
        <p>
          ${this.description}
        </p>
      </a>
    
    `;
  }
}
