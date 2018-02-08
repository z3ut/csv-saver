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
const csvText = csvSaver.getText();
```

### CsvSaver config

Name | Type | Description | Default value
--- | --- | --- | ---
delimiter | string | Delimeter sequence for separating fields | ','
newLineSequence | string | New line sequence between records | '\r\n'
shouldEscapeCharacters | boolean | Should service escape new line and delimeter sequences in arguments of addArguments() and addArgumentsLine() | true

### CsvSaver Methods

Method | Description | Arguments
--- | --- | ---
addString | Add string | string
addStringLine | Add string and new line | string
addNewLine | Add new line | none
addDelimeter | Add delimeter | none
addArguments | Add arguments | ...objects
addArgumentsLine | Add arguments and new line | ...objects
saveAs | Save CSV file | filename
getText | Return CSV as text | none
