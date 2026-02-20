import { useState } from 'react'
import CodeBlock from '../components/CodeBlock.jsx'

/* ── Material Symbols from Figma icon library (node 20:2291) ── */
const CATEGORIES = {
  'Navigation': [
    'arrow_back', 'arrow_back_2', 'arrow_forward', 'arrow_left', 'arrow_right',
    'arrow_upward', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_up',
    'arrow_circle_down', 'arrow_circle_left', 'arrow_circle_right', 'arrow_circle_up',
    'arrow_shape_up', 'arrow_menu_close', 'arrow_menu_open',
    'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up',
    'first_page', 'expand_all', 'expand_content', 'unfold_less', 'unfold_more',
    'menu', 'close', 'close_small', 'home',
  ],
  'Actions': [
    'add', 'add_2', 'add_circle', 'remove', 'check', 'cancel', 'block',
    'search', 'settings', 'tune', 'filter_list', 'refresh', 'autorenew', 'sync',
    'save', 'delete', 'edit', 'draw', 'download', 'upload', 'print',
    'publish', 'send', 'share', 'reply', 'forward', 'replay',
    'content_copy', 'drag_indicator', 'open_in_new', 'login', 'logout',
    'switch_access_shortcut', 'start',
  ],
  'Content': [
    'article', 'article_shortcut', 'description', 'book', 'book_5',
    'receipt_long', 'grading', 'assignment_ind', 'assignment_late',
    'label', 'tag', 'category', 'flag', 'keep',
    'link', 'attach_file', 'code', 'database',
    'data_check', 'rule', 'route', 'analytics', 'insert_chart',
    'preview', 'grid_view', 'view_list', 'view_stream', 'table_rows',
    'splitscreen', 'window',
  ],
  'Communication': [
    'mail', 'forward_to_inbox', 'chat_bubble', 'forum', 'campaign',
    'notifications', 'alternate_email', 'call_merge',
    'record_voice_over', 'mic', 'cell_tower', 'language',
  ],
  'People': [
    'person', 'person_add', 'group', 'group_add', 'groups_2',
    'account_circle', 'sensor_occupied', 'import_contacts',
    'support', 'live_help', 'help', 'help_center',
  ],
  'Files & Folders': [
    'folder', 'folder_off', 'folder_special', 'folder_zip',
    'cloud', 'cloud_done', 'cloud_off',
    'archive', 'image', 'add_photo_alternate', 'animated_images',
  ],
  'Formatting': [
    'format_bold', 'format_italic', 'format_underlined', 'format_clear',
    'format_align_left', 'format_align_center', 'format_align_right',
    'format_list_bulleted', 'format_list_numbered', 'format_quote',
    'format_h1', 'format_h2', 'format_h3', 'format_size',
    'title', 'titlecase', 'uppercase', 'match_case',
    'text_fields',
  ],
  'Status & Feedback': [
    'check_circle', 'error', 'warning', 'info',
    'help', 'brightness_alert', 'brightness_empty',
    'do_not_disturb_on', 'gpp_maybe', 'pending', 'pending_actions',
    'verified', 'security', 'shield', 'shield_person',
    'lock', 'lock_clock', 'lock_open_right',
    'visibility', 'visibility_off',
  ],
  'Toggle & Selection': [
    'check_box', 'check_box_outline_blank', 'check_indeterminate_small',
    'radio_button_checked', 'radio_button_unchecked',
    'favorite', 'bookmark_star', 'star', 'star_half', 'stars',
    'thumb_up', 'thumb_down', 'thumbs_up_down', 'mood',
  ],
  'Media & Playback': [
    'play_circle', 'playlist_add', 'playlist_add_check', 'playlist_play',
    'fiber_manual_record',
  ],
  'Calendar & Events': [
    'calendar_today', 'calendar_view_week', 'date_range',
    'event', 'event_busy', 'event_list', 'event_note',
    'history', 'schedule',
  ],
  'Commerce & Awards': [
    'storefront', 'shoppingmode', 'sell', 'local_activity',
    'toll', 'license', 'receipt_long',
    'award_star', 'editor_choice', 'workspace_premium', 'trophy',
    'rocket_launch', 'lightbulb', 'science',
  ],
  'Places & Maps': [
    'location_on', 'map', 'hub', 'workspaces', 'storage',
    'web_traffic', 'fan_indirect',
  ],
  'Keyboard': [
    'keyboard_command_key', 'keyboard_return',
    'keyboard_arrow_down', 'keyboard_arrow_left',
    'keyboard_arrow_right', 'keyboard_arrow_up',
  ],
  'Misc': [
    'more_horiz', 'more_vert', 'list',
    'smart_toy', 'reviews',
    'line_start_arrow', 'line_start_arrow_notch',
  ],
}

/* ── Custom SVG icons (not in Google Material Symbols) ── */
const CUSTOM_SVGS = [
  {
    name: 'Intellum Assist',
    src: '/icons/intellum-assist.svg',
    source: 'Figma (custom)',
  },
  {
    name: 'Intellum Logo',
    src: '/icons/intellum-logo.svg',
    source: 'Figma (custom)',
  },
  {
    name: 'Evolve',
    src: '/icons/evolve.svg',
    source: 'Figma (custom)',
  },
  {
    name: 'X (Twitter)',
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    source: 'SocialShare',
  },
  {
    name: 'Facebook',
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
    source: 'SocialShare',
  },
  {
    name: 'LinkedIn',
    svg: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    source: 'SocialShare',
  },
]

/* Flatten all icons for search */
const ALL_ICONS = Object.entries(CATEGORIES).flatMap(([cat, icons]) =>
  icons.map(name => ({ name, category: cat }))
)

export default function IconsPage() {
  const [query, setQuery] = useState('')
  const [filled, setFilled] = useState(false)
  const lowerQuery = query.toLowerCase()

  const filteredIcons = lowerQuery
    ? ALL_ICONS.filter(i => i.name.includes(lowerQuery))
    : null

  const filteredCustom = lowerQuery
    ? CUSTOM_SVGS.filter(i => i.name.toLowerCase().includes(lowerQuery))
    : CUSTOM_SVGS

  const totalCount = ALL_ICONS.length + CUSTOM_SVGS.length

  return (
    <div>
      <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Icons
      </h2>
      <p style={{
        fontSize: 14,
        color: 'var(--page-secondary)',
        marginBottom: 12,
        maxWidth: 600,
      }}>
        {ALL_ICONS.length} Material Symbols + {CUSTOM_SVGS.length} custom SVG icons.
        All Material Symbols use Google&apos;s &ldquo;Outlined&rdquo; weight.
      </p>
      <p style={{
        fontSize: 12,
        color: 'var(--page-muted)',
        marginBottom: 32,
        maxWidth: 600,
      }}>
        {totalCount} icons total sourced from the Figma icon library.
        Click any icon name to copy it.
      </p>

      {/* ── Search + Fill toggle ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search icons..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '100%',
            maxWidth: 400,
            padding: '10px 16px',
            fontSize: 14,
            border: '1px solid var(--code-border)',
            borderRadius: 'var(--rounded-md)',
            background: 'var(--code-bg)',
            color: 'var(--page-text)',
            outline: 'none',
          }}
        />
        <button
          onClick={() => setFilled(f => !f)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '8px 14px',
            fontSize: 12,
            fontWeight: 600,
            border: '1px solid var(--code-border)',
            borderRadius: 'var(--rounded-md)',
            background: filled ? 'var(--nav-active-bg)' : 'var(--code-bg)',
            color: filled ? 'var(--nav-active)' : 'var(--page-text)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontFamily: 'Material Symbols Outlined',
            fontSize: 18,
            lineHeight: 1,
            fontVariationSettings: "'FILL' 1",
          }}>
            format_paint
          </span>
          {filled ? 'Filled' : 'Outlined'}
        </button>
        {lowerQuery && (
          <span style={{
            marginLeft: 12,
            fontSize: 12,
            color: 'var(--page-muted)',
          }}>
            {(filteredIcons?.length || 0) + filteredCustom.length} result{(filteredIcons?.length || 0) + filteredCustom.length !== 1 ? 's' : ''}
          </span>
        )}
      </div>

      {/* ── Material Symbols ── */}
      {filteredIcons ? (
        /* Search results mode */
        filteredIcons.length > 0 && (
          <div style={{ marginBottom: 56 }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24 }}>
              Material Symbols
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 8,
            }}>
              {filteredIcons.map(icon => (
                <IconCell key={icon.name} name={icon.name} filled={filled} />
              ))}
            </div>
          </div>
        )
      ) : (
        /* Categorized mode */
        Object.entries(CATEGORIES).map(([category, icons]) => (
          <div key={category} style={{ marginBottom: 48 }}>
            <h3 style={{
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
              color: 'var(--page-text)',
            }}>
              {category}
              <span style={{
                fontSize: 12,
                fontWeight: 400,
                color: 'var(--page-muted)',
                marginLeft: 8,
              }}>
                {icons.length}
              </span>
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 8,
            }}>
              {icons.map(name => (
                <IconCell key={name} name={name} filled={filled} />
              ))}
            </div>
          </div>
        ))
      )}

      {/* ── Custom SVG Icons ── */}
      {filteredCustom.length > 0 && (
        <div style={{ marginBottom: 56 }}>
          <h3 style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 8,
            paddingTop: 24,
            borderTop: '1px solid var(--code-border)',
          }}>
            Custom SVG Icons
          </h3>
          <p style={{
            fontSize: 12,
            color: 'var(--page-muted)',
            marginBottom: 24,
          }}>
            Icons not available in Google Material Symbols.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
          }}>
            {filteredCustom.map(icon => (
              <div
                key={icon.name}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  padding: 16,
                  borderRadius: 'var(--rounded-md)',
                  border: '1px solid var(--code-border)',
                  background: 'var(--code-bg)',
                }}
              >
                <div style={{
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--page-text)',
                }}>
                  {icon.svg || (
                    <img
                      src={icon.src}
                      alt={icon.name}
                      style={{ width: 20, height: 20 }}
                    />
                  )}
                </div>
                <span style={{
                  fontSize: 11,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--page-text)',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {icon.name}
                </span>
                <span style={{
                  fontSize: 9,
                  color: 'var(--page-muted)',
                }}>
                  {icon.source}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Usage ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        paddingTop: 24,
        borderTop: '1px solid var(--code-border)',
      }}>
        Usage
      </h3>

      <CodeBlock title="Material Symbol (outlined)">{`<span
  className="material-symbols-outlined"
  style={{ fontSize: 20 }}
>
  check_circle
</span>`}</CodeBlock>

      <CodeBlock title="Material Symbol (filled)">{`<span
  className="material-symbols-outlined"
  style={{ fontSize: 20, fontVariationSettings: "'FILL' 1" }}
>
  check_circle
</span>`}</CodeBlock>

      <CodeBlock title="Material Symbol (CSS Module helper)">{`/* In your CSS Module */
.icon {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

/* In your JSX */
<span className={styles.icon} style={{ fontSize: 20 }}>
  settings
</span>`}</CodeBlock>

      <CodeBlock title="Custom SVG (inline)">{`<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
  <path d="..." />
</svg>`}</CodeBlock>

      <CodeBlock title="Custom SVG (file)">{`<img src="/icons/intellum-assist.svg" alt="Intellum Assist" width="20" height="20" />`}</CodeBlock>

      {/* ── Architecture ── */}
      <h3 style={{
        fontSize: 18,
        fontWeight: 700,
        marginBottom: 24,
        marginTop: 32,
      }}>
        Architecture
      </h3>

      <CodeBlock title="Icon sources">{`/* Material Symbols Outlined
   Loaded via Google Fonts in index.html.
   Use any icon name from this page as text content.
   Reference: https://fonts.google.com/icons

   Custom SVGs
   Stored in /public/icons/ as .svg files.
   Brand logos (Intellum, Evolve) and social icons (X, Facebook, LinkedIn)
   are not part of the Material Symbols set.

   Figma source: node 20:2291 in the ID.s 2026 WIP file.
*/`}</CodeBlock>
    </div>
  )
}

/* ── Icon cell component ── */
function IconCell({ name, filled }) {
  const [copied, setCopied] = useState(false)

  function handleClick() {
    navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      onClick={handleClick}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        padding: '12px 4px 8px',
        borderRadius: 'var(--rounded-md)',
        border: '1px solid transparent',
        background: copied ? 'var(--nav-active-bg)' : 'transparent',
        cursor: 'pointer',
        transition: 'background 0.15s',
        color: 'var(--page-text)',
      }}
      title={`Copy "${name}"`}
    >
      <span
        style={{
          fontFamily: 'Material Symbols Outlined',
          fontSize: 24,
          lineHeight: 1,
          fontVariationSettings: `'FILL' ${filled ? 1 : 0}`,
        }}
      >
        {name}
      </span>
      <span style={{
        fontSize: 9,
        fontFamily: 'var(--font-mono)',
        color: copied ? 'var(--nav-active)' : 'var(--page-muted)',
        textAlign: 'center',
        lineHeight: 1.2,
        wordBreak: 'break-all',
      }}>
        {copied ? 'copied!' : name}
      </span>
    </button>
  )
}
