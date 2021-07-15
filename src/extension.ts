// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import CanvasPanel from './CanvasPanel';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
		vscode.commands.registerCommand('canvas-dojo.start', () => {
			CanvasPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('canvas-dojo.doRefactor', () => {
			if (CanvasPanel.currentPanel) {
				CanvasPanel.currentPanel.doRefactor();
			}
		})
	);
}


// class CanvasViewProvider implements vscode.WebviewViewProvider {

// 	public static readonly viewType = 'canvas-dojo.canvasView';

// 	private _view?: vscode.WebviewView;

// 	constructor(
// 		private readonly _extensionUri: vscode.Uri,
// 	) { }

// 	public resolveWebviewView(
// 		webviewView: vscode.WebviewView,
// 		context: vscode.WebviewViewResolveContext,
// 		_token: vscode.CancellationToken,
// 	) {
// 		this._view = webviewView;

// 		webviewView.webview.options = {
// 			// Allow scripts in the webview
// 			enableScripts: true,

// 			localResourceRoots: [
// 				this._extensionUri
// 			]
// 		};

// 		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

// 		webviewView.webview.onDidReceiveMessage(data => {
// 			switch (data.type) {
// 				case 'colorSelected':
// 					{
// 						vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(`#${data.value}`));
// 						break;
// 					}
// 			}
// 		});
// 	}

//   public show() {
//     if (this._view) {
// 			this._view.show?.(true); // `show` is not implemented in 1.49 but is for 1.50 insiders
// 			this._view.webview.postMessage({ type: 'show' });
// 		}
//   }

// 	private _getHtmlForWebview(webview: vscode.Webview) {
// 		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
// 		// const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));

//     const editor = vscode.window.activeTextEditor;
//     let scriptCode = "";
//     if (editor) {
//       const document = editor.document;
//       scriptCode = document.getText();
//     }

// 		// Do the same for the stylesheet.
// 		const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css'));
// 		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css'));
// 		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));

// 		// Use a nonce to only allow a specific script to be run.
// 		const nonce = getNonce();

// 		return `<!DOCTYPE html>
// 			<html lang="en">
// 			<head>
// 				<meta charset="UTF-8">
// 				<!--
// 					Use a content security policy to only allow loading images from https or from our extension directory,
// 					and only allow scripts that have a specific nonce.
// 				-->
// 				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
// 				<meta name="viewport" content="width=device-width, initial-scale=1.0">

// 				<link href="${styleResetUri}" rel="stylesheet">
// 				<link href="${styleVSCodeUri}" rel="stylesheet">
// 				<link href="${styleMainUri}" rel="stylesheet">
				
// 				<title>Cat Colors</title>
// 			</head>
// 			<body>
//         <canvas></canvas>
// 				<script nonce="${nonce}">
//         ${scriptCode}
//         </script>
// 			</body>
// 			</html>`;
// 	}
// }

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}


// this method is called when your extension is deactivated
export function deactivate() {}
