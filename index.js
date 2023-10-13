import LowLevelZipFile from './lowlevel.js';

export default class ZipFile extends LowLevelZipFile {
	constructor() {
		super();
		this.entries = [];
	}

	async addFile(...args) {
		const entry = await super.addFile(...args);

		this.entries.push(entry);

		return entry;
	}

	async addReadStream(...args) {
		const entry = await super.addReadStream(...args);

		this.entries.push(entry);

		return entry;
	}

	async addBuffer(...args) {
		const entry = await super.addBuffer(...args);

		this.entries.push(entry);

		return entry;
	}

	async addEmptyDirectory(...args) {
		const entry = await super.addEmptyDirectory(...args);

		this.entries.push(entry);

		return entry;
	}

	removeEntry(entry) {
		this.entries = this.entries.filter(existingEntry => existingEntry !== entry);
	}

	async end(options = {}) {
		const entry = await super.addCentralDirectoryRecord(this.entries, options);

		super.end();

		return entry;
	}
}
