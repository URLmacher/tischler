<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd1e6bf679dfc59768fba8ca7fb984dbb
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd1e6bf679dfc59768fba8ca7fb984dbb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd1e6bf679dfc59768fba8ca7fb984dbb::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}