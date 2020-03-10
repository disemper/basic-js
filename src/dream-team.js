module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    dreamName = members.map((name) => {
      if (typeof name === "string") {
        name = name.trim();
        return name[0].toUpperCase();
      }
    }).sort().join('');
    return (dreamName) ?  dreamName : false;
  } else return false;

};