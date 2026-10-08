<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Define public English and Arabic URLs as explicit leaf routes backed by shared bilingual content modules, so direct links and page metadata remain reliable.
- Keep personal enquiries and CV selections in transient component state only; the requested demo adapter must never send or persist them.
- Persist only validated editorial sandbox content in a versioned browser-local store, preserving pending/illustrative labels independently of publication state.
- Externalize supplied and downloaded media through Lovable Assets; retain a real square favicon in public for browser compatibility.

- Use shared bilingual premium interactions for video dialogs, quote previews and quick actions; all quote data stays transient and no-send states remain explicit.
