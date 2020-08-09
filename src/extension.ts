import * as vscode from 'vscode';
import { oneSentence, twoSentences, paragraph, paragraphs } from './horadrim';

export function activate(context: vscode.ExtensionContext) {
  let disposables = [
    vscode.commands.registerCommand('horadrim-ipsum.sentence', () => {
      insertText(oneSentence[Math.floor(Math.random() * oneSentence.length)]);
    }),
    vscode.commands.registerCommand('horadrim-ipsum.sentences', () => {
      insertText(twoSentences[Math.floor(Math.random() * twoSentences.length)]);
    }),
    vscode.commands.registerCommand('horadrim-ipsum.paragraph', () => {
      insertText(paragraph[Math.floor(Math.random() * paragraph.length)]);
    }),
    vscode.commands.registerCommand('horadrim-ipsum.paragraphs', () => {
      insertText(paragraphs[Math.floor(Math.random() * paragraphs.length)]);
    }),
  ];

  disposables.forEach((disposable) => {
    context.subscriptions.push(disposable);
  });
}

function insertText(lorem: string) {
  var editor = vscode.window.activeTextEditor;
  if (editor === undefined) {
    vscode.window.showInformationMessage(
      "It's beginning to feel like some great evil is permeating the air around here."
    );
    return;
  }

  editor.edit((edit) => {
    if (editor === undefined) {
      vscode.window.showInformationMessage(
        "It's beginning to feel like some great evil is permeating the air around here."
      );
      return;
    }

    editor.selections.forEach((selection) => {
      edit.delete(selection);
      edit.insert(selection.start, lorem);
    });
  });
}

export function deactivate() {}
