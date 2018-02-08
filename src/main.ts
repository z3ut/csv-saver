export interface CsvSaverConfig {
  delimiter?: string;
  newLineSequence?: string;
  shouldEscapeCharacters?: boolean;
}

export class CsvSaver {

  private delimiter: string;
  private newLineSequence: string;
  private shouldEscapeCharacters: boolean;

  private text: string;

  public constructor({ delimiter = ',', newLineSequence = '\r\n',
      shouldEscapeCharacters = true }: CsvSaverConfig = {}) {
    this.delimiter = delimiter;
    this.newLineSequence = newLineSequence;
    this.shouldEscapeCharacters = shouldEscapeCharacters;

    this.text = '';
  }

  public addString(text: string) {
    this.text += text;
  }

  public addStringLine(text: string) {
    this.addString(text);
    this.addNewLine();
  }

  public addNewLine() {
    this.addString(this.newLineSequence);
  }

  public addDelimeter() {
    this.addString(this.delimiter);
  }

  public addArguments(...objects: any[]) {
    this.addString(objects.map(obj => {
      let objectString = String(obj);
      if (this.shouldEscapeCharacters) {
        if (objectString.includes(this.delimiter) || objectString.includes(this.newLineSequence)) {
          objectString = `"${objectString.replace(/"/g, '""')}"`;
        }
      }
      return objectString;
    }).join(this.delimiter));
  }

  public addArgumentsLine(...objects: any[]) {
    this.addArguments(...objects);
    this.addNewLine();
  }

  public saveAs(fileName: string) {
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);
    const blob = new Blob(['\uFEFF', this.text], { type: 'text/csv; charset=UTF8' });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  public getText(): string {
    return this.text;
  }
}
