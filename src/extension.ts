// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CanvasPanel from "./CanvasPanel";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("canvas-dojo.start", () => {
      CanvasPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("canvas-dojo.doRefactor", () => {
      if (CanvasPanel.currentPanel) {
        CanvasPanel.currentPanel.doRefactor();
      }
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
