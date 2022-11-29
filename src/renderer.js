const render = ({ userList, hash, users }) => {
  const html = users
    .map((user, i) => {
      return `
        <li>
        <a href='#${i}'>${user.username}</a>
        ${
          parseInt(hash) === i
            ? `<pre>${JSON.stringify(user, null, 2)}</pre>`
            : ""
        }
        </li>
        `;
    })
    .join("");
  userList.innerHTML = html;
};

module.exports = render;
