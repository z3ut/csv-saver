# CSV Saver

Create and save CSV files in browser

## Installation

```
npm i csv-saver
```

## Usage

```
import { CsvSaver } from 'csv-saver';

const csvSaver = new CsvSaver();

csvSaver.addStringLine('This,is,header');
csvSaver.addString('some,text');
csvSaver.addNewLine();
csvSaver.addArgumentsLine(1, '2', new Date());

csvSaver.saveAs('report.csv');
console.log(csvSaver.getText());
```

Service default config:
```
{
  delimiter: ',',
  newLineSequence: '\r\n',
  shouldEscapeCharacters: true
}
```