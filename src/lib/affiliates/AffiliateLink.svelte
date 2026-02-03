<script lang="ts">
  import type { AffiliateLink } from './links';

  export let link: AffiliateLink;
  export let showDisclosure: boolean = true;
</script>

<span class="affiliate-wrapper">
  <a
    href={link.url}
    target="_blank"
    rel="noopener sponsored"
    class="affiliate-link"
  >
    {link.label} →
  </a>
  {#if showDisclosure}
    <span class="affiliate-disclosure">(kumppanilinkki)</span>
  {/if}
</span>

<style>
  .affiliate-wrapper {
    display: inline;
  }
  .affiliate-link {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
  }
  .affiliate-link:hover {
    text-decoration: underline;
  }
  .affiliate-disclosure {
    color: #6c757d;
    font-size: 0.8em;
    margin-left: 0.25em;
  }
</style>
