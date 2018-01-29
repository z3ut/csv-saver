export interface CsvSaverConfig {
  delimiter?: string;
  newLineSequence?: string;
}

export class CsvSaver {

  private delimiter: string;
  private newLineSequence: string;

  private text: string;

  public constructor({ delimiter = ',', newLineSequence = '\r\n' }: CsvSaverConfig = {}) {
    this.delimiter = delimiter;
    this.newLineSequence = newLineSequence;
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

  public addArgumentsLine(...objects: any[]) {
    this.addStringLine(objects.join(this.delimiter));
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
