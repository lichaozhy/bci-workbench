'use strict';

const Duck = require('@or-change/duck');
const DuckElectron = require('@or-change/duck-electron');
const DuckWeb = require('@or-change/duck-web');
const DuckWebpack = require('@or-change/duck-webpack');
const DuckLog = require('@or-change/duck-log');

const Protocol = require('./Protocol');
const bootstrap = require('./bootstrap');
const WorkbenchBackend = require('./Backend');
const normalize = require('./normalize');

module.exports = function BrainComputerInterfaceWorkbench(options) {
	// const finalOptions = normalize(options);

	return Duck({
		id: 'edu.tju.bci.workbench',
		injection: {
			// options: finalOptions, //TODO some meta data NOT finalOptions hash
			// receiver: new Protocol.Server()
		},
		components: [
			DuckElectron(bootstrap),
			DuckWeb([
				{
					id: 'WorkbenchBackend',
					Application: WorkbenchBackend
				}
			]),
			DuckWebpack(),
			DuckLog({
				backend: {
					format: DuckLog.Format.ApacheCLF(),
					appenders: [
						DuckLog.Appender.Console()
					]
				},
				recevier: {
					appenders: [
						DuckLog.Appender.Console()
					]
				}
			})
		]
	}, function Product() {
		return {
			getWebpackBaseConfig() {

			}
		}
	});
};