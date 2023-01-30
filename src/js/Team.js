export default class Team {
  constructor() {
    this.members = new Set();
  }

  addMembers(...members) {
    for (const member of members) {
      this.members.add(member);
    }
  }

  * [Symbol.iterator]() {
    const memberList = Array.from(this.members);
    for (let i = 0; i < memberList.length; i += 1) {
      yield memberList[i];
    }
  }
}
