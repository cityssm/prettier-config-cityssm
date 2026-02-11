document.querySelector('#test').innerHTML = /* html */ `
  <img
      src="test/inline"
      alt="test"
      style="object-fit: cover; width: 48px; height: 48px;"
      loading="lazy"
  />
                  ${true
    ? /* html */ `
                        <span
                          class="icon is-large has-text-grey"
                        >
                          <i class="fa-solid ${fileIcon} fa-2x"></i>
                        </span>
                      `
    : ''}
`;
export {};
