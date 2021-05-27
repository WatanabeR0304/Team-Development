<?php

  declare(strict_types=1);

  function sanitizeString(string $string): string {
    return htmlspecialchars($string, ENT_QUOTES, "UTF-8");
  }

  echo sanitizeString("<h1>Test</h1>");